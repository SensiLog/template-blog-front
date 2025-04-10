import { React, useState, useEffect, use } from 'react'
import CardLeis from '../components/CardLeis'
import instance from '../hooks/instance.js'
import { useNavigate } from 'react-router-dom'

function AdminLeis() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null) // Estado para o post selecionado
  const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(false) // Estado para abrir/fechar modal de opções
  const [isEditModalOpen, setIsEditModalOpen] = useState(false) // Estado para abrir/fechar modal de edição
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false) // Estado para abrir/fechar modal de exclusão

  const navigate = useNavigate()

  const getData = async () => {
    try {
      const response = await instance.get('/leis/user/a1d4072d-8237-463a-a0be-d5598342f87c')
      setData(response.data)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setError('Erro ao carregar os dados. Tente novamente mais tarde.')
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      await instance.delete(`/leis/${id}`);
      alert('Lei deletada com sucesso!');
      setData(data.filter((lei) => lei.id !== id)); // Remove a lei deletada da lista
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Erro ao deletar a lei:', error);
      alert('Erro ao deletar a lei. Tente novamente.');
    }
  };

  const handleEdit = async (id, updatedLei) => {
    try {
      const response = await instance.patch(`/leis/${id}`, updatedLei);
      alert('Lei atualizada com sucesso!');
      setData(data.map((lei) => (lei.id === id ? response.data : lei))); // Atualiza a lei na lista
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Erro ao atualizar a lei:', error);
      alert('Erro ao atualizar a lei. Tente novamente.');
    }
  };

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white'>
      <h1 className='text-3xl mb-8 font-bold'>Gerenciar Leis</h1>
      <div className='flex flex-row items-center gap-8 mb-8'>
        <button onClick={() => navigate('/admin/leis/add')} className='cursor-pointer bg-slate-700 hover:bg-slate-600 transition p-3 rounded shadow-2xl text-white'>Adicionar nova lei</button>
        <button onClick={() => navigate('/admin')} className='cursor-pointer bg-slate-700 hover:bg-slate-600 transition p-3 rounded shadow-2xl text-white'>Voltar ao menu</button>
      </div>
      <div className='flex flex-col items-center md:items-stretch justify-center md:flex-wrap md:flex-row gap-8 w-full 2xl:w-[1500px] lg:px-32 md:px-12'>
        {loading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p className='text-red-500'>{error}</p>
        ) : data ? (
          data.map((item, index) => (
            <CardLeis
              key={index}
              id={item.id}
              ementa={item.ementa}
              numeroLei={item.numeroLei}
              conteudoLei={item.conteudoLei}
              statusLei={item.statusLei}
              function={() => {
                setSelectedPost(item)
                setIsOptionsModalOpen(true)
              }}
            />
          ))
        ) : (
          <p>Não há posts disponíveis.</p>
        )}
      </div>

      {/* Modal de Opções */}
      {isOptionsModalOpen && selectedPost && (
        <div
          className="fixed inset-0 modal-overlay flex items-center justify-center"
          onClick={() => setIsOptionsModalOpen(false)} // Fecha o modal ao clicar no fundo
        >
          <div
            className="bg-slate-600 p-6 rounded shadow-md w-96 relative"
            onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro da caixa
          >
            <button
              className="absolute top-4 right-6 text-white text-4xl cursor-pointer hover:text-gray-200 transition"
              onClick={() => setIsOptionsModalOpen(false)} // Botão "X" para fechar
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Opções</h2>
            <p>O que você deseja fazer com a lei "{selectedPost.numeroLei}"?</p>
            <div className="mt-4 flex justify-evenly">
              <button
                className="bg-slate-500 cursor-pointer hover:bg-slate-400 transition text-white px-4 py-2 rounded mr-2"
                onClick={() => {
                  setIsOptionsModalOpen(false);
                  setIsEditModalOpen(true); // Abre o modal de edição
                }}
              >
                Editar
              </button>
              <button
                className="bg-red-500 cursor-pointer hover:bg-red-400 transition text-white px-4 py-2 rounded"
                onClick={() => {
                  setIsOptionsModalOpen(false);
                  setIsDeleteModalOpen(true); // Abre o modal de exclusão
                }}
              >
                Deletar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Edição */}
      {isEditModalOpen && selectedPost && (
        <div
          className="fixed inset-0 modal-overlay flex items-center justify-center"
          onClick={() => setIsEditModalOpen(false)} // Fecha o modal ao clicar no fundo
        >
          <div
            className="bg-slate-600 p-6 rounded shadow-md w-96 relative"
            onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro da caixa
          >
            <button
              className="absolute top-4 right-6 text-white text-4xl cursor-pointer hover:text-gray-200 transition"
              onClick={() => setIsEditModalOpen(false)} // Botão "X" para fechar
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Editar Lei</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const updatedLei = {
                  numeroLei: e.target.numeroLei.value,
                  ementa: e.target.ementa.value,
                  conteudoLei: e.target.conteudoLei.value,
                  statusLei: e.target.statusLei.value,
                };
                console.log(updatedLei);
                handleEdit(selectedPost.id, updatedLei);
              }}
            >
              <div className="mb-4">
                <label>Número da Lei:</label>
                <input
                  type="text"
                  name="numeroLei"
                  defaultValue={selectedPost.numeroLei}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label>Ementa:</label>
                <input
                  type="text"
                  name="ementa"
                  defaultValue={selectedPost.ementa}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label>Conteúdo da Lei:</label>
                <textarea
                  name="conteudoLei"
                  defaultValue={selectedPost.conteudoLei}
                  className="w-full p-2 border rounded"
                ></textarea>
              </div>
              <div className="mb-4">
                <label>Status da Lei:</label>
                <select
                  name="statusLei"
                  defaultValue={selectedPost.statusLei}
                  className="w-full p-2 border rounded"
                >
                  <option value="PROJETO">PROJETO</option>
                  <option value="SANCIONADA">SANCIONADA</option>
                </select>
              </div>
              <div className="mt-4 flex justify-evenly">
                <button
                  type="submit"
                  className="bg-blue-500 cursor-pointer hover:bg-blue-400 transition text-white px-4 py-2 rounded mr-2"
                >
                  Salvar
                </button>
                <button
                  type="button"
                  className="bg-gray-500 cursor-pointer hover:bg-gray-400 transition text-white px-4 py-2 rounded mr-2"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Exclusão */}
      {isDeleteModalOpen && selectedPost && (
        <div
          className="fixed inset-0 modal-overlay flex items-center justify-center"
          onClick={() => setIsDeleteModalOpen(false)} // Fecha o modal ao clicar no fundo
        >
          <div
            className="bg-slate-600 p-6 rounded shadow-md w-96 relative"
            onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro da caixa
          >
            <button
              className="absolute top-4 right-6 text-white text-4xl cursor-pointer hover:text-gray-200 transition"
              onClick={() => setIsDeleteModalOpen(false)} // Botão "X" para fechar
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Confirmar Exclusão</h2>
            <p>Tem certeza que deseja excluir a lei "{selectedPost.numeroLei}"?</p>
            <div className="mt-4 flex justify-evenly">
              <button
                className="bg-red-500 cursor-pointer hover:bg-red-400 transition text-white px-4 py-2 rounded mr-2"
                onClick={() => handleDelete(selectedPost.id)}
              >
                Deletar
              </button>
              <button
                className="bg-gray-500 cursor-pointer hover:bg-gray-400 transition text-white px-4 py-2 rounded mr-2"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminLeis