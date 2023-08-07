import { Container } from './styles.js'

export function Button({ icon: Icon, name, loading = false, ...rest }) {
  return (
    <Container
      type='button'
      disabled={loading}
      {...rest}
    >
      {Icon && <Icon size={20} />}

      {loading ? 'Carregando...' : name}
    </Container>

  )
}