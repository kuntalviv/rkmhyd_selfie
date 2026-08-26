const SUPABASE_URL =
  "https://bskdgcyetisdzexlluiz.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_kmFIQekmT819TeOL-HZYug_E0QJSaWl";

const supabaseClient =
  supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );


const getSessionId = () => {
  let sessionId = sessionStorage.getItem("certificate_session_id");

  if (!sessionId) {
    sessionId = crypto.randomUUID();

    sessionStorage.setItem(
      "certificate_session_id",
      sessionId
    );
  }

  return sessionId;
};



async function recordCertificateGeneration() {
  const sessionId = getSessionId();

  const { error } = await supabaseClient
    .from("sep_selfie")
    .insert({
      session_id: sessionId
    });

  if (error) {
    // Duplicate session — already counted
    if (error.code === "23505") {
      console.log("Session already counted");
      return;
    }

    console.error("Supabase error:", error);
    return;
  }

  console.log("Certificate generation recorded");
}
