// Vérification de connexion
if (isset($_POST['formlogin']))
{
  extract($_POST);

  if(!empty ($_POST['identifiant']) && !empty ($POST['motdepasse']))
  {

    connection.query('SELECT * FROM utilisateur WHERE username = ?', [identifiant], (error, results, fields) => {
          if (error) throw error;

          if (results.length > 0)
          {
            // Le compte existe
            if (results[0]['password'] == motdepasse)
            {
              console.log("Le mot de passe est correct, connexion en cours");
            }
            else
            {
              console.log("Le mot de passe est incorrect");
            }
          }
          else
          {
            console.log("Le compte avec le nom d'utilisateur " + identifiant + " n'existe pas");
          }

        });
      }
      else
      {
        console.log("Veuillez remplir tous les champs");
      }
    }
