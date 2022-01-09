using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElaTrampa.Models
{
    public class Vaga
    {
        public int IDVaga { get; set; }
        public int IDEmpresa { get; set; }

        public int IDCandidato { get; set; }

        public string TituloVaga { get; set; }
        public string DescriçãoVaga { get; set; }

        public Empresa Empresa { get; set; }

        public Candidato Candidato { get; set; }

    }
}
