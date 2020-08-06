import { useState } from 'react';
//custom hook
function useForm(valoresIniciais) {
    const [values, setValues] = useState(valoresIniciais);
  
    // abrindo o array -> console.log(nomeDaCategoria) -> array [nome, função]
     function setValue(chave, valor) {
      // chave: nome, descricao, bla, bli
      setValues({
        ...values,
        [chave]: valor, // nome: 'valor'
      });
    }
  
    function handleChange(infosDoEvento) {
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value,
      );
    }
  
    function clearForm() {
      setValues(valoresIniciais)
    }
  
    return {
      values,
      handleChange,
      clearForm
    };
  }
  
  export default useForm;