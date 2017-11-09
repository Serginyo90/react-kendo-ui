const muckNamesApi = [
    {
        id: 1,
        name: 'Jo Ji'
    },
    {
        id: 2,
        name: 'Jo Jo'
    },
    {
        id: 3,
        name: 'Almpachini'
    },
    {
        id: 4,
        name: 'Kinder Porn'
    },
]



export const getNames = () => dispatch => {
      setTimeout(() => {
        console.log('I got Names');
        dispatch({ type: 'FETCH_NAMES_SUCCESS', payload: muckNamesApi })
      }, 2000);
    }