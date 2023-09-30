import '../GenerationEmail.css';
function EmailGeneration () {
    const options = {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          email: "john.doe@email.com"
        }),
      };
    return (
        
        <div>

        </div>
    )

}

export default EmailGeneration