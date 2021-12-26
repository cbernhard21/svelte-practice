import { writable } from "svelte/store";

export const owners = writable([]);

const fetchOwners = async () => {
    // const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const url = `https://opensheet.vercel.app/1b8yX7nWWkK4Pjui2i8Y9jcX4zzCmL3O9AWKs1dvObtg/main`;
    const res = await fetch(url);
    const data = await res.json();
    
    const loadedOwners = data.map((item, index) => {
        return {
            id: index + 1,
            firstName: item.firstName,
            lastName: item.lastName,
            teamName: item.teamName,
            logo: item.logo,
            regWins: item.regWins,
            regLoses: item.regLoses,
            regWinPercentage: item.regWinPercentage,
            playoffWins: item.playoffWins,
            playoffLoses: item.playoffLoses
        };
    });
    owners.set(loadedOwners);
};

fetchOwners();




