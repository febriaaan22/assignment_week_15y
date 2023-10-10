const apiUrl = 'https://assignment-backend-15.vercel.app'

const fetchControllerGety = async () => {
		try {
			const response = await fetch(`${apiUrl}/usery/gety`, {
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
const fetchControllerPosty = async () => {
		try {
			const response = await fetch(`${apiUrl}/usery/posty`, {
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
const fetchControllerPuty = async () => {
		try {
			const response = await fetch(`${apiUrl}/usery/puty`, {
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
const fetchControllerDeletey = async () => {
		try {
			const response = await fetch(`${apiUrl}/usery/deletey`, {
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
export { fetchControllerGety, fetchControllerPuty, fetchControllerPosty, fetchControllerDeletey };