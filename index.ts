
import express from "express";
import fileUpload from "express-fileupload";
import path from "path"
const app = express();

// Routes
import routes from "./src/routes/index";

// Setting
app.set( "port", process.env.PORT || 3001 );

// Starting Server
app.listen( app.get( "port" ), () => { 
    console.log( "Server on port", app.get( "port" ) )  
});

// Middlewares
app.use( express.json() ); // envio y recibo de json
app.use(express.static(path.join(__dirname, 'public'))); // función para servir archivos estáticos

app.use((req,res, next)=>{
    res.setHeader('Access-Control-Allow-Origin',"http://localhost:3000");
    res.setHeader('Access-Control-Allow-Headers',"*");
    res.header('Access-Control-Allow-Credentials', "true");
    next();
});

// default option
app.use(fileUpload());

// Setting Routes
app.all( "/", ( req, res ) => { 
    res.send("Welcome to the api");
})

app.use( "/insumos", routes.Insumo );
app.use( "/platillos", routes.Platillo );

app.all( "*", ( req, res ) => { 
    res.send("This route doesn´t exist");
})