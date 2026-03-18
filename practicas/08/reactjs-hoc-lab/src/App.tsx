import withData from '../hoc/withData'
import InfoUsuario from './InfoUsuario'
import { SpinnerDotted } from 'spinners-react'
import type { RandomUserApiResponse } from '../types/randomUser'

const App = () => {
  const InfoUsuarioWithData = withData<{}, RandomUserApiResponse>(
    InfoUsuario,
    'https://randomuser.me/api/',
    <SpinnerDotted size={50} thickness={100} speed={100} color="#36ad47" />
  )

  return (
    <div>
      <InfoUsuarioWithData />
    </div>
  )
}

export default App