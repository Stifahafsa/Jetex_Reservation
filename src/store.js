import { configureStore } from '@reduxjs/toolkit';
import volsReducer from './reducers/VolsReducer'

const store = configureStore({

    reducer: {

        vols : volsReducer,
        

    }
});

export default store