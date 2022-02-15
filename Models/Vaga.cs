using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElaTrampa.Models
{
    public class Vaga
    {
        public int VagaID { get; set; }
        public int EmpresaID { get; set; }

        public int CandidatoID { get; set; }

        public string TituloVaga { get; set; }
        public string DescriçãoVaga { get; set; }

        public Empresa Empresa { get; set; }

        public Candidato Candidato { get; set; }

    }
}
