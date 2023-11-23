import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function TestButton() {
  return (
    <Stack spacing={3} direction="row">
      <Button variant="text">Test1</Button>
      <Button variant="contained">Test2</Button>
      <Button variant="outlined">Test3</Button>
    </Stack>
  );
}