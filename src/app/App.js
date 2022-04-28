import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  
} from 'react-router-dom';
import {
  CreateAccountPage,
  EmailConfirmationLanderPage,
  SignInPage,
  ProtectedRoute,
  
} from '../auth';
import { useAuth } from '../auth/useAuth';
import { ReservationsListPage } from '../reservations';
import {
  RestaurantDetailPage,
  SearchPage,
} from '../restaurants';
import {
  WriteAReviewPage,
  WriteAReviewThankYouPage,
} from '../reviews';
import { EditProfilePage } from '../user';
import './App.css';

/*
  This is the main React component that we render the rest of
  of app's components inside of. In our app, we're using this
  component to hold the Router and all the different Routes our
  app supports.
*/
export function App() {
  const {isLoading, user}= useAuth();
  return (
    <Router>
      <Switch>  
        <p>wtrite</p>
        <ProtectedRoute path='/sign-in' isLoading={isLoading} isAuthed={!!user}>
          <SignInPage />
        </ProtectedRoute>
        <ProtectedRoute path='/create-account'   isLoading={isLoading} isAuthed={!!user}>
          <CreateAccountPage />
        </ProtectedRoute>
        <ProtectedRoute path='/edit-profile'   isLoading={isLoading} isAuthed={!!user}>
          <EditProfilePage />
        </ProtectedRoute>
        <ProtectedRoute path='/email-confirmation/success'   isLoading={isLoading} isAuthed={!!user}>
          <EmailConfirmationLanderPage success />
        </ProtectedRoute>
        <ProtectedRoute path='/email-confirmation/failure'  isLoading={isLoading} isAuthed={!!user}>
          <EmailConfirmationLanderPage />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact  isLoading={isLoading} isAuthed={!!user}>
          <ReservationsListPage />
        </ProtectedRoute>
        <ProtectedRoute path='/search'  isLoading={isLoading} isAuthed={!!user}>
          <SearchPage />
        </ProtectedRoute>
        <ProtectedRoute path='/restaurants/:id'  isLoading={isLoading} isAuthed={!!user}>
          <RestaurantDetailPage />
        </ProtectedRoute>
        <ProtectedRoute path='/write-a-review/:id'  isLoading={isLoading} isAuthed={!!user}>
          <WriteAReviewPage />
        </ProtectedRoute>
        <ProtectedRoute path='/review/thank-you'  isLoading={isLoading} isAuthed={!!user}>
          <WriteAReviewThankYouPage />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}
