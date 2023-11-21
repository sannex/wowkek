import Button from 'react-bootstrap/Button';


function testButton() {
    return (
      <>
        <div className="mb-2">
          <Button variant="primary" size="lg">
            Test button
          </Button>{' '}
          <Button variant="secondary" size="lg">
            Test button
          </Button>
        </div>
        <div>
          <Button variant="primary" size="sm">
            Register
          </Button>{' '}
          <Button variant="secondary" size="sm">
            Sign in
          </Button>
        </div>
      </>
    );
  }
  
  
  export default testButton;