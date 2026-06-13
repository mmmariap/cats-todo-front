// для работы с API

const API_BASE_URL = 'https://todo.jailbreak-projects.ru/api';

export async function getPacks() {
    const response = await fetch(`${API_BASE_URL}/packs`);
    const data = await response.json();
    
    return data;
}

export async function createPack(pack) {
}

export async function updatePack(id, pack) {
}

export async function deletePack(id) {
}