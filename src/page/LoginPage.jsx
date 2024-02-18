import LogInForm from 'components/LogInForm/LogIn';
import { Section } from 'components/Section/Section';

const LogInPage = () => {
  return (
    <>
      <Section title="Welcome back">
        <LogInForm />
      </Section>
    </>
  );
};

export default LogInPage;
