import * as S from './styles'

const Main: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado
       escrito ao lado."
      />
      <S.Title>REACT AVANÇADO</S.Title>
      <S.Description>
        TypeScript, ReactJS, NextJS and Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código"
      />
    </S.Wrapper>
  )
}

export default Main
