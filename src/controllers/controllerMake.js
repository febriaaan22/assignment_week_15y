const apiUrl = 'https://tiny-pear-chimpanzee-garb.cyclic.app'

const fetchControllerGet = async () => {
		try {
			const response = await fetch(`${apiUrl}/user/gety`, {
				method: "GET",
			});
			if (response.ok) {
				const data = await response.json();
				console.log(data.message);
			} 
		} catch (error) {
            console.log(error)
		}
	};
const fetchControllerPut = async () => {
		try {
			const response = await fetch(`${apiUrl}/user/puty`, {
				method: "PUT",
			});
			if (response.ok) {
				const data = await response.json();
				console.log(data.message);
			} 
		} catch (error) {
            console.log(error)
		}
	};
const fetchControllerPost = async () => {
		try {
			const response = await fetch(`${apiUrl}/user/posty`, {
				method: "POST",
			});
			if (response.ok) {
				const data = await response.json();
				console.log(data.message);
			} 
		} catch (error) {
            console.log(error)
		}
	};
const fetchControllerDelete = async () => {
		try {
			const response = await fetch(`${apiUrl}/user/deletey`, {
				method: "DELETE",
			});
			if (response.ok) {
				const data = await response.json();
				console.log(data.message);
			} 
		} catch (error) {
            console.log(error)
		}
	};
export { fetchControllerGet, fetchControllerPut, fetchControllerPost, fetchControllerDelete };