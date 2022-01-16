import { createClient } from '@supabase/supabase-js';

const NEXT_PUBLIC_SUPABASE_URL = 'https://qjahegcudmolthdlvoto.supabase.co';
const NEXT_PUBLIC_SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTk5OTkwNiwiZXhwIjoxOTU3NTc1OTA2fQ.b50sa-VK0oQ6oGispQibQ-OXuw1XLvQVup9kwniUWCY';
export const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_KEY);

export const loginWith3rdParty = async (provider) => {
  const { user, session, error } = await supabase.auth.signIn(
    {
      provider: provider
    },
    {
      redirectTo:
        process.env.NODE_ENV === 'production'
          ? 'https:///advices/'
          : 'http://localhost:3000/advices/'
    }
  );

  if (error) console.log(error);
};
