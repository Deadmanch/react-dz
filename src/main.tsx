import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';

import { RequireAuth } from './helpers/RequireAuth';
import { API_KEY, API_URL } from './hooks/useAPI';
import { IMovieById } from './interfaces/movieById.interface';
import { Layout } from './layouts/Layout';
import { Error } from './pages/Error';
import { Favorites } from './pages/Favorites';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { Movie } from './pages/Movie';

import './reset.css';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: (
					<RequireAuth>
						<Main />
					</RequireAuth>
				)
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/favorites',
				element: (
					<RequireAuth>
						<Favorites />
					</RequireAuth>
				)
			},
			{
				path: '/movie/:id',
				element: (
					<RequireAuth>
						<Movie />
					</RequireAuth>
				),
				loader: async ({ params }) => {
					return defer({
						data: axios.get<IMovieById>(`${API_URL}/${params.id}`, {
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
		<RouterProvider router={router} />
	</React.StrictMode>
);
