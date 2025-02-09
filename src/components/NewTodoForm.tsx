import React, {useState} from 'react'

{/* <NewTodoForm addTodo={addTodo}/> */}

export const NewTodoForm: React.FC<{ addTodo: Function}> = (props) => {

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if (description !== '' && assigned !== '') {
            props.addTodo(description, assigned)
        }
        setDescription('');
        setAssigned('');
    }

    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input type='text' className='form-control' required 
                        onChange={e => setAssigned(e.target.value)}
                        value={assigned}
                    ></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Desctiption</label>
                    <textarea className='form-control' rows={3} required 
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                </div>
                <button type='button' className='btn btn-primary mt-3' onClick={submitTodo} >Adding Todo</button>
            </form>
        </div>
    )
}
