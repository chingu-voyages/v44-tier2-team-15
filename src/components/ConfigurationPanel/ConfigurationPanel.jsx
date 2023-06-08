import { IconContext } from 'react-icons';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import ConfigurationForm from 'components/ConfigurationPanel/ConfigurationForm';
import { Title, Icon } from './ConfigurationPanel.styled';

const ConfigurationPanel = ({ onClose }) => {
  return (
    <>
      <IconContext.Provider value={{ size: '30px', color: '#2a3a42' }}>
        <Icon onClick={onClose}>
          <AiOutlineCloseCircle />
        </Icon>
      </IconContext.Provider>
      <Title>Choose configuration</Title>
      <ConfigurationForm onClose={onClose} />
    </>
  );
};

export default ConfigurationPanel;
