import {actions} from "./symbiotes";
import {handleFetching} from 'symbiote-fetching'


export const getData = () =>
    handleFetching(actions.fetchData, {
        noThrow: false,
        async run(dispatch) {
            try {
                const response = await  fetch('https://my-json-server.typicode.com/unicorns4re4live/test_data/db')
                const data = await response.json()
                await  dispatch(actions.setProjects(data['projects']))
                await  dispatch(actions.setTechnologies(data['technologies']))
                return data
            }
            catch (e) {
                console.log(e)
            }
        }
    })