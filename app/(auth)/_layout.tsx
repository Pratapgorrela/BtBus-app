import { Stack } from "expo-router";

const Layout = () => {
	return (
		<Stack>
			<Stack.Screen name="welcome" options={{ headerShown: false }} />
			{/* <Stack.Screen name="(root)" options={{ headerShown: false }} />
			<Stack.Screen name="(auth)" options={{ headerShown: false }} /> */}
		</Stack>
	);
};

export default Layout;
