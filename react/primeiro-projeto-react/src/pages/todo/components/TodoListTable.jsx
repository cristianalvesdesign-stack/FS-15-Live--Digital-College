import Table from 'react-bootstrap/Table'
import Button  from 'react-bootstrap/Button';


function TodoListTable () {
    const todoList = [
       {title: 'Tarefa 1', status: 'doing', creatd_at: '08/09/2026' },
       {title: 'Tarefa 2', status: 'doing', creatd_at: '08/09/2026' },
       {title: 'Tarefa 3', status: 'doing', creatd_at: '08/09/2026' },
       {title: 'Tarefa 4', status: 'doing', creatd_at: '08/09/2026' },
]
    return (
        <>
        <div className="d-flex justify-content-end">
                    <Button variant="primary" size='sm'>Nova Atividade</Button>
                </div>
                <Table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Status</th>
                        <th>Data</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoList.map((taks, index) => (
                            <tr kry={index}>
                                <td>{taks.title}</td>
                                <td>{taks.status}</td>
                                <td>{taks.creatd_at}</td>
                                <td>
                                    <button variant='info' size='sm'>
                                        Editar
                                    </button>
                                    <button variant='danger' size='sm'>
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default TodoListTable