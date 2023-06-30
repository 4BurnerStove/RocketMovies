import { ButtonText } from '../../Components/ButtonText'
import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'

import { TfiArrowLeft } from 'react-icons/tfi'
import { FiLock, FiMail, FiUser, FiCamera} from 'react-icons/fi'

import { Container, Form, Avatar } from './styles'

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText icon={TfiArrowLeft} name='Voltar'></ButtonText>
        
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/4Burnerstove.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera/>
            <input type="file" id='avatar' />
          </label>
        </Avatar>


        <Input type='text' placeholder='Nome de usuário' icon={FiUser}></Input>
        <Input type='text' placeholder='E-mail' icon={FiMail}></Input>
        <Input type='password' placeholder='Senha atual' icon={FiLock}></Input>
        <Input type='password' placeholder='Nova senha' icon={FiLock}></Input>

        <Button name='Salvar'></Button>

      </Form>
    </Container>
  )
}