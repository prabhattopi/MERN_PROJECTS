const nodemailer=require("nodemailer")
import { OAuth2Client } from "google-auth-library"

const OAUTH_PLAYGROUND="https://developers.google.com/oauthplayground"
const CLIENT_ID=`${process.env.MIAL_CLIENT_ID}`
