import { Signup} from "@root/features/auth/Controller/signup";
import express, {Router} from "express";

class AuthRoutes {
    private router: Router;

    constructor() {
    this.router = express.Router();
    }

    public routes(): Router {
        this.router.post('/signup',Signup.prototype.signup);
        this.router.post('/signup', Signup.prototype.signup);

    }

}