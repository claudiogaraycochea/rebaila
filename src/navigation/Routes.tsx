/*
    Public screens
*/

import Home from '../screens/public/home/Home';

// Onboarding
import Experience from '../screens/public/onboarding/experience/Experience';
import Target from '../screens/public/onboarding/target/Target';
import Gender from '../screens/public/onboarding/gender/Gender';
import Time from '../screens/public/onboarding/time/Time';
import UserData from '../screens/public/onboarding/userData/UserData';
import CreatePlanning from '../screens/public/onboarding/createPlanning/CreatePlanning';

// Payments
import Subscription from '../screens/public/payment/subscription/Subscription';

/*
    Private screens
*/

import Welcome from '../screens/private/welcome/Welcome';

// Video screens
import VideoPlayer from '../screens/private/video/player/Player';

// Define the screens for authentication (login, sign in, validations, others).
const authScreens = {
};

// Define the screens that the user can see authenticated or not authenticated.
const publicScreens = {
    // Public
        Subscription,
        Experience,
        Home,
        // Onboarding
            // Experience,
            Target,
            Gender,
            Time,
            UserData,
            CreatePlanning,
        // Payment
        // Subscription,
    // Private
        Welcome,
        VideoPlayer
};

// Define the screens that the user can see only if is authenticated.
const privateScreens = {
};

export { publicScreens };