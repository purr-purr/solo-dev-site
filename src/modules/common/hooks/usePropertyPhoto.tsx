import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

import { BACKEND_LOCALHOST } from '@utils/const';

interface IGalleryList {
	original: string;
	thumbnail: string;
}

const usePropertyPhoto = (id: number): IGalleryList[] => {
	const [fileList, setFileList] = useState<IGalleryList[]>([]);

	const getPath = useMemo(() => {
		return (fileName: string) =>
			require(`public/assets/property/${id}/${fileName}`).default;
	}, [id]);

	const getImageList = (data: string[]) => {
		console.log(data);
		const importedImages = data.map((filename: string) => {
			return {
				original: getPath(filename).src,
				thumbnail: getPath(filename).src,
			};
		});
		setFileList(importedImages);
	};

	useEffect(() => {
		const fetchFileList = async () => {
			try {
				const response = await axios.get<string[]>(
					`${BACKEND_LOCALHOST}/filenames/${id}`,
				);
				getImageList(response.data);
			} catch (error) {
				console.error(
					`Error fetching Images file list => for id-${id} object:`,
					error,
				);
			}
		};

		if (id >= 1) {
			fetchFileList().then();
		}
	}, [id]);

	return fileList;
};

export default usePropertyPhoto;
