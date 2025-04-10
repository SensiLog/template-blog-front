import React, { useState, useEffect } from 'react';
import CardNoticia from '../components/CardNoticia';
import instance from '../hooks/instance.js';
import { formatDate } from '../hooks/utils.js';
import { useNavigate } from 'react-router-dom';

function AdminNoticias() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null); // Estado para o post selecionado
  const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(false); // Estado para abrir/fechar modal de opções
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Estado para abrir/fechar modal de edição
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Estado para abrir/fechar modal de exclusão

  const navigate = useNavigate(); // Hook para navegação

  const getData = async () => {
    try {
      const response = await instance.get('/posts/user/a1d4072d-8237-463a-a0be-d5598342f87c');
      setData(response.data.posts);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError('Erro ao carregar os dados. Tente novamente mais tarde.');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await instance.delete(`/posts/${id}`);
      alert('Post deletado com sucesso!');
      setData(data.filter((post) => post.id !== id)); // Remove o post deletado da lista
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Erro ao deletar o post:', error);
      alert('Erro ao deletar o post. Tente novamente.');
    }
  };

  const handleEdit = async (id, updatedPost) => {
    try {
      const response = await instance.patch(`/posts/${id}`, updatedPost);
      alert('Post atualizado com sucesso!');
      setData(data.map((post) => (post.id === id ? response.data : post))); // Atualiza o post na lista
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Erro ao atualizar o post:', error);
      alert('Erro ao atualizar o post. Tente novamente.');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white'>
      <h1 className='text-3xl mb-8 font-bold'>Gerenciar Noticias</h1>
      <div className='flex flex-row items-center gap-8 mb-8'>
        <button onClick={() => navigate('/admin/posts/add')} className='cursor-pointer bg-slate-700 hover:bg-slate-600 transition p-3 rounded shadow-2xl text-white'>Adicionar nova noticia</button>
        <button onClick={() => navigate('/admin')} className='cursor-pointer bg-slate-700 hover:bg-slate-600 transition p-3 rounded shadow-2xl text-white'>Voltar ao menu</button>
      </div>
      <div className='flex flex-col items-center md:items-stretch justify-center md:flex-wrap md:flex-row gap-8 w-full 2xl:w-[1500px] lg:px-32 md:px-12'>
        {loading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p className='text-red-500'>{error}</p>
        ) : data ? (
          data.map((item, index) => (
            <CardNoticia
              key={index}
              id={item.id}
              urlImage={item.imgUrl}
              title={item.title}
              date={formatDate(item.date)}
              desc={item.content}
              function={() => {
                setSelectedPost(item);
                setIsOptionsModalOpen(true); // Abre o modal de opções ao clicar no card
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
            <p>O que você deseja fazer com o post "{selectedPost.title}"?</p>
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
            <h2 className="text-xl font-bold mb-4">Editar Post</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const updatedPost = {
                  title: e.target.title.value,
                  content: e.target.content.value,
                  userId: selectedPost.userId
                };
                console.log('Atualizando post:', updatedPost);
                handleEdit(selectedPost.id, updatedPost);
              }}
            >
              <div className="mb-4">
                <label>Título:</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={selectedPost.title}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label>Descrição:</label>
                <textarea
                  name="content"
                  defaultValue={selectedPost.content}
                  className="w-full p-2 border rounded"
                ></textarea>
              </div>
              <div className='mt-4 flex justify-evenly'>
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
            <p>Tem certeza que deseja excluir o post "{selectedPost.title}"?</p>
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
  );
}

export default AdminNoticias;