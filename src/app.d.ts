declare global {
	namespace App {}
}

declare module '*.md' {
	import type { Component } from 'svelte';
	export default Component;
	export const metadata: Record<string, unknown>;
}

export {};
