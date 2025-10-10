import { useGetProdutosQuery } from '../services/api'

import Produto from '../components/Produto'

import * as S from './styles'

// type Props = {
//   produtos: ProdutoType[]
//   favoritos: ProdutoType[]
// }

const ProdutosComponent = () => {
  const { data: produtos, isLoading, isError } = useGetProdutosQuery()

  if (isLoading) {
    return <h2>Carregando...</h2>
  }

  if (isError) {
    return <h2>Erro ao carregar os produtos</h2>
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
