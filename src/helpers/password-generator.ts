import axios from 'axios';
import { checkPasswordUniqueness } from 'services/personalInformationService'; // Renamed for clarity

// Helper function to generate a random password
const generateRandomPassword = (length: number = 12): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
};

// Function to check if the password exists in the database
const isPasswordUnique = async (password: string): Promise<boolean> => {
    try {
        const response = await checkPasswordUniqueness({ password }); // Assuming the API expects an object
        return !response.exists; // Assume the API responds with { exists: boolean }
    } catch (error) {
        console.error('Error checking password uniqueness:', error);
        return false; // Default to false if there's an error
    }
};

// Main password generator function
const generateUniquePassword = async (length: number = 12): Promise<string> => {
    let password: string = ''; // Initialize the variable to an empty string
    let isUnique = false;

    while (!isUnique) {
        password = generateRandomPassword(length); // Generate a random password
        isUnique = await isPasswordUnique(password); // Check uniqueness
    }

    return password; // Return the unique password
};

export default generateUniquePassword;
