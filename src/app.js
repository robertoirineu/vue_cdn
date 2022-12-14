const MyNameApp = {
	data(){
		return {
			name: "João",
			idade: 49,
			input_name: ""
			

		}
	},

	methods: {
		SubmitForm(e){
			console.log("Me ajuda Deus[Jeová]");
			e.preventDefault();
			this.name = this.input_name;
		}
		
	}
}

Vue.createApp(MyNameApp).mount("#app");
