import axios from "axios"
export default{
  data(){
    return{
      dbURL : import.meta.env.VITE_DB_URL,
      projects: [],
    }
  },

  methods:{
    getProjects(){
      axios.get(`${this.dbURL}projects.json`)
      .then((res)=>{
        this.projects = res.data;
        console.log(this.projects);

      })
    }
  }
}