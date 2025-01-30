import { Stack } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDepartments } from '../../hooks/useDepartments';
import { useAuth0 } from '@auth0/auth0-react';
import starterImg from 'assets/img/spot-illustrations/2.png';
import starterDarkImg from 'assets/img/spot-illustrations/dark_2.png';
import Button from 'components/base/Button';
import { Link } from 'react-router-dom';

const Starter = () => {
  // const { user } = useAuth0();
  const { departments, loading } = useDepartments();
  console.log(departments);

  return (
    <Stack className="flex-center content-min-h">
      <div className="text-center py-9">
        <img
          src={starterImg}
          width={470}
          className="img-fluid mb-7 d-dark-none"
          alt="starter"
        />
        <img
          src={starterDarkImg}
          width={470}
          className="img-fluid mb-7 d-light-none"
          alt="starter"
        />
        <h1 className="text-body-secondary fw-normal mb-5">
          Create Something Beautiful.
        </h1>
        {/* <h2>{user?.name}</h2> */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Button
            as={Link}
            className="btn btn-lg btn-primary"
            to="/documentation/getting-started"
          >
            Getting Started
          </Button>
        )}
      </div>
    </Stack>
  );
};

export default Starter;
