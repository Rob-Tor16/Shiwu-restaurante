import React from 'react';
import { useState } from 'react';
import './login.css';
import app from '../firebase/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {getFirestore, doc, setDoc} from "firebase/firestore";

const auth = getAuth(app);


const Login = () => {
  const [isRegistrando, setIsRegistrando] = useState(false);
  const firestore = getFirestore(app);

  async function registrarUsuario(email, password, rol) {
    try {
      // Crear el usuario con Firebase Authentication
      const usuarioFirebase = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuario registrado:", usuarioFirebase.user.uid);
  
      // Crear el documento en Firestore
      const docRef = doc(firestore, `usuarios/${usuarioFirebase.user.uid}`);
      await setDoc(docRef, { correo: email, rol: rol });
  
      console.log("Documento creado en Firestore");
    } catch (error) {
      console.error("Error al registrar usuario:", error.message);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value; 
  
    console.log("submit", email, password, rol);
  
    if (isRegistrando) {
      registrarUsuario(email, password, rol);
    } else {

    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="div-login d-flex justify-content-center m-5">
        <div className="login rounded text-white p-5">
          <div className="d-flex justify-content-center">
            <h2 className="text-white">Iniciar Sesión</h2>
          </div>
          <div className="logo-login">
            <img src="/img/logo shiwu.png" alt="" width="100%" />
          </div>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label className="text-white">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email"
              />
            </div>
            <div className="mb-3">
              <label className="text-white">Contraseña:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="contraseña"
              />
            </div>
            <div className="col-auto">
              <span id="passwordHelpInline" className="form-text text-white">
                Minimo 6 caracteres
              </span>
            </div>
            <div className="mb-3">
                Rol:
                <select id="rol" name="rol">
                  <option value="user">
                    User
                  </option>
                  <option  value="admin">
                    Admin
                  </option>
                </select>
            </div>
            <div className="d-flex justify-content-center">
                <input type='submit' value={isRegistrando ? "registrar" : "iniciar sesión"}></input>
            </div>
            
          
          </form>
          <div className="d-flex justify-content-center "onClick={ ()=> setIsRegistrando(!isRegistrando)}>
              {isRegistrando ? "ya tengo una cuenta" : <button type='button' >registro</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
