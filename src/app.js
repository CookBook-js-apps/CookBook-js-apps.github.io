import { page } from '../src/library.js';
import decorateContext from './middleware/render.js';
import addSession from './middleware/session.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';

page(addSession());
page(decorateContext());
page('/', homePage);
page('/login', loginPage);

page.start();
