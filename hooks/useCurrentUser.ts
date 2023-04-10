import useSWR from "swr";
import { useSession } from "next-auth/react";
import fetcher from "@/libs/fetcher";

const useCurrentUser = () => {
	const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher, {
		shouldRetryOnError: false
	});

	return {
		data,
		error,
		isLoading,
		mutate
	};
};

export default useCurrentUser;
