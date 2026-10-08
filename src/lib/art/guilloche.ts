export type Band = {
	radius: number;
	amplitude: number;
	lobes: number;
	strands: number;
	seconds: number;
};

export type Ring = Band & { path: string; turns: number[] };

const STEPS = 360;

const strand = ({ radius, amplitude, lobes }: Band): string => {
	const points = Array.from({ length: STEPS }, (_, step) => {
		const angle = (step / STEPS) * Math.PI * 2;
		const reach = radius + amplitude * Math.sin(lobes * angle);
		return `${(reach * Math.cos(angle)).toFixed(1)} ${(reach * Math.sin(angle)).toFixed(1)}`;
	});
	return `M${points.join('L')}Z`;
};

const turns = ({ lobes, strands }: Band): number[] =>
	Array.from({ length: strands }, (_, index) => (360 / lobes / strands) * index);

export const rings = (bands: Band[]): Ring[] =>
	bands.map((band) => ({ ...band, path: strand(band), turns: turns(band) }));

export const heroBands: Band[] = [
	{ radius: 452, amplitude: 62, lobes: 28, strands: 9, seconds: 420 },
	{ radius: 344, amplitude: 70, lobes: 18, strands: 8, seconds: -340 },
	{ radius: 232, amplitude: 66, lobes: 12, strands: 8, seconds: 280 },
	{ radius: 122, amplitude: 58, lobes: 7, strands: 7, seconds: -220 }
];
