using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Configuration;
using System.Data.OracleClient;
using System.Web.Script.Serialization;

namespace ASPWebApp
{
    /// <summary>
    /// Summary description for ConsumerData
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class ConsumerData : System.Web.Services.WebService
    {

        [WebMethod]
        public void GetData()
        {
            List<Person> personList = new List<Person>();
            for(int i=0;i<=99;i++)
            {
                personList.Add(new Person()
                {
                    PersonID = i + 1,
                    BirthDate = DateTime.Now.AddYears(-20).AddDays(i),
                    Gender = (i % 2 == 0) ? "MALE" : "FEMALE",
                    Name = "RANJITH" + i
                });
            }
            JavaScriptSerializer js = new JavaScriptSerializer();
            Context.Response.Write(js.Serialize(personList));
        }
    }
}
