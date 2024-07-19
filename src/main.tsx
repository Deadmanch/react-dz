import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';

import { API_URL, API_KEY } from './helpers/appClient';
import { RequireAuthLoader } from './helpers/RequireAuthLoader';
import { IMovie } from './interfaces/movie.interface';
import { Layout } from './layouts/Layout';
import { Error } from './pages/Error';
import { Favorites } from './pages/Favorites';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { Movie } from './pages/Movie';
import { store } from './store/store';

import './reset.css';
import './base.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Main />,
				loader: RequireAuthLoader
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/favorites',
				element: <Favorites />,
				loader: RequireAuthLoader
			},
			{
				path: '/movie/:id',
				element: <Movie />,
				loader: async ({ params }) => {
					return defer({
						data: axios.get<IMovie>(`${API_URL}/movie/${params.id}`, {
							headers: {
								accept: 'application/json',
								'X-API-KEY': API_KEY
							}
						})
					});
				}
			}
		]
	},
	{
		path: '*',
		element: <Error />
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
