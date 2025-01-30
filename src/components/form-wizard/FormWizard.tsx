import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { motion } from 'framer-motion';

interface FormWizardProps {
  steps: string[];
  stepImages?: string[];
  optionalSteps?: number[];
  onFinish?: () => void;
  renderStepContent?: (step: number) => React.ReactNode;
}

const FormWizard: React.FC<FormWizardProps> = ({
  steps,
  stepImages = [],
  optionalSteps = [],
  onFinish,
  renderStepContent
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => optionalSteps.includes(step);
  const isStepSkipped = (step: number) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    if (activeStep === steps.length - 1) {
      onFinish?.();
    } else {
      setActiveStep(prev => prev + 1);
      setSkipped(newSkipped);
    }
  };

  const handleBack = () => setActiveStep(prev => prev - 1);

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep(prev => prev + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => setActiveStep(0);

  return (
    <Box sx={{ width: '100%', maxWidth: 900, mx: 'auto', mt: 5 }}>
      <Paper
        elevation={5}
        sx={{
          p: 4,
          borderRadius: 4,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step
              key={label}
              completed={isStepSkipped(index) ? false : undefined}
            >
              <StepLabel
                optional={
                  isStepOptional(index) ? (
                    <Typography variant="caption">Optional</Typography>
                  ) : undefined
                }
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeStep === steps.length ? (
            <Typography variant="h5" sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
              🎉 All steps completed - You&apos;re done!
            </Typography>
          ) : (
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              {stepImages[activeStep] && (
                <img
                  src={stepImages[activeStep]}
                  alt={`Step ${activeStep + 1}`}
                  width={300}
                  height={200}
                  style={{ borderRadius: 10, marginBottom: 20 }}
                />
              )}
              {renderStepContent && renderStepContent(activeStep)}

              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Box>
                  {isStepOptional(activeStep) && (
                    <Button
                      variant="outlined"
                      color="warning"
                      onClick={handleSkip}
                      sx={{ mr: 2 }}
                    >
                      Skip
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </motion.div>
      </Paper>
    </Box>
  );
};

export default FormWizard;
