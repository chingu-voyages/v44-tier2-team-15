import ConfigurationForm from 'components/ConfigurationPanel/ConfigurationForm';
import { Title } from './ConfigurationPanel.styled';

const ConfigurationPanel = ({ onClose }) => {
  return (
    <>
      <Title>Choose configuration</Title>
      <ConfigurationForm onClose={onClose} />
    </>
  );
};

export default ConfigurationPanel;
