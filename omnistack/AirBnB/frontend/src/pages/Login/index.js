import React from 'react';

export default function Login(){
    return (
        <>
      <p>
        TExto para o <strong>app </strong>appp com <strong>nenrfe</strong> neg asdarito
      </p>

      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">E_MAIL *</label>
        <input 
          type="email" 
          id="email"  
          placeholder="Seu email email"
          onChange={event => setEmail(event.target.value)}
          value={email}
        />
        <button className="btn" type="submit">Entrar</button>


      </form>
      </>
      )
}