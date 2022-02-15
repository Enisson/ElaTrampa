using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace ElaTrampa.Models
{
    public class Empresa
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int EmpresaID { get; set; }
        public string NomeEmpresa { get; set; }

        public string NomeContatoEmpresa { get; set; }

        public string EmailEmpresa { get; set; }

        public string TelefoneEmpresa { get; set; }

        public ICollection<Vaga> Vagas { get; set; }


    }
}
