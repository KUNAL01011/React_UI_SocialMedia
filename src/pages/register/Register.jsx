import { Link } from 'react-router-dom'
import './register.scss'

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Web Mak.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            suscipit praesentium ratione perspiciatis repudiandae excepturi
            maiores perferendis necessitatibus. Nesciunt, inventore enim! Qui ut
            corrupti eos quidem quod exercitationem quibusdam perspiciatis!
          </p>
          <span>Do you have an account?</span>
          <Link to = '/login'>
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="name" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
