import {actions} from "./symbiotes";
import {handleFetching} from 'symbiote-fetching'


export const getProjects = () =>
    handleFetching(actions.fetchProjects, {
        noThrow: false,
        async run(dispatch) {
            try {
                const response = await  fetch('https://my-json-server.typicode.com/unicorns4re4live/test_data/db')
                const result = await response.json()
                const data = result['projects']
                await  dispatch(actions.setProjects(data))
                return data
            }
            catch (e) {
                console.log(e)
            }
        }
    })