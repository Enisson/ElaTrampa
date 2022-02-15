using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ElaTrampa.Models;

namespace ElaTrampa.Data
{
    public class DbInitializer
    {

        public static void Initialize(EmpregoContext context)
        {
            context.Database.EnsureCreated();

            //Procurando por algum candidato
            if (context.Candidatos.Any())
            {
                return; //DB foi preenchido 
            }

            var candidatos = new Candidato[]
            {
                new Candidato{Nome="Jaylen Hurts",CPF="78956412321",Email="jhurts@nfl.com"},
                new Candidato{Nome="Dak Prescott",CPF="78956412421",Email="dakota@nfl.com"},
                new Candidato{Nome="Tom Brady",CPF="78956412371",Email="tombrasa@nfl.com"}
            };
            foreach (Candidato c in candidatos)
            {
                context.Candidatos.Add(c);
            }
            context.SaveChanges();

            var empresas = new Empresa[]
            {
                new Empresa{EmpresaID=1024,NomeEmpresa="Eagles",NomeContatoEmpresa="Nick Syriani",EmailEmpresa="eagles@nfl.com",TelefoneEmpresa="+155577788"},
                new Empresa{EmpresaID=1025,NomeEmpresa="Dallas",NomeContatoEmpresa="Mike McCarthy",EmailEmpresa="cowboys@nfl.com",TelefoneEmpresa="+155577799"},
                new Empresa{EmpresaID=1026,NomeEmpresa="Bucs",NomeContatoEmpresa="Bruce Arians",EmailEmpresa="bucs@nfl.com",TelefoneEmpresa="+155544488"}
            };
            foreach (Empresa e in empresas)
            {
                context.Empresas.Add(e);
            }
            context.SaveChanges();

            var vagas = new Vaga[]
            {
                new Vaga{CandidatoID=1,EmpresaID=1024,TituloVaga="Jovem Aprendiz",DescriçãoVaga="Lorem Ipsum, Lorem Ipsum, Lorem Ipsum"},
                new Vaga{CandidatoID=2,EmpresaID=1025,TituloVaga="Cabeleleira",DescriçãoVaga="Lorem Ipsum, Lorem Ipsum, Lorem Ipsum"},
                new Vaga{CandidatoID=3,EmpresaID=1026,TituloVaga="Costureira",DescriçãoVaga="Lorem Ipsum, Lorem Ipsum, Lorem Ipsum"}
            };
            foreach (Vaga v in vagas)
            {
                context.Vagas.Add(v);
            }
            context.SaveChanges();
        }

    }
}
