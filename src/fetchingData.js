const mainGitSearch = document.querySelector(".main__gitSearch");
const htmlClass = document.querySelector(".html__class");
const errorMessageSection = document.querySelector(".error__message");

// template for displaying data to the dom
const displayGitProfile = function (datas) {
  // converting the date profile was created from api into a normal readable date
  const createdDate = new Date(datas.created_at);
  const dateProfileCreated = new Intl.DateTimeFormat("en-UK", {
    day: "numeric",
    year: "numeric",
    month: "short",
  }).format(createdDate);

  // template for displaying data to the dom
  const html = `
  <div
  class="px-6 bg-white dark:bg-darkModeBodyColor mt-6 shadow-lg shadow-lightCyan dark:shadow-darkBlue dark:shadow-xl md:px-8 py-6 md:py-10 lg:flex lg:gap-9 rounded-2xl lg:rounded-3xl"
>
  <!-- display image laptop display -->
  <section class="hidden lg:block">
    <img
      src="${datas.avatar_url}"
      alt=""
      class="w-24 rounded-full md:w-32 lg:w-38"
    />
  </section>

  <!--normal profile display -->
  <div class="">
    <!-- ===== profile header ========== -->
    <div class="flex gap-7 items-center md:items-start">
      <section class="lg:hidden">
        <img
          src="${datas.avatar_url}"
          alt=""
          class="w-24 rounded-full md:w-32 lg:w-38"
        />
      </section>
      <section
        class="w-full flex flex-col lg:flex-row lg:justify-between lg:items-start"
      >
        <div>
          <!-- name -->
          <p
            class="profile__name dark:text-white text-darKModeBackground font-bold text-lg md:text-2xl"
          >
            ${datas.name ? datas.name : "No Name"}
          </p>
          <!-- username -->
          <p
            class="text-iconButtonColor text-sm md:text-base lg:mt-1"
          >
            @${datas.login ? datas.login : "nousername"}
          </p>
        </div>

        <!-- joined date -->
        <p
          class="text-sm md:text-base mt-2 dark:text-white text-lightModeTextColor lg:mt-0"
        >
          Joined ${dateProfileCreated}
        </p>
      </section>
    </div>

    <!-- ============= profile bio -============  -->
    <div class="mt-6">
      <p
        class="text-lightModeTextColor dark:text-lightCyan text-sm md:text-base"
      >
        ${datas.bio ? datas.bio : "This profile has no bio"}
      </p>
    </div>

    <!-- -================== statistics ========= -->
    <div
      class="statistics bg-lightModeBackground dark:bg-darKModeBackground flex justify-between mt-8 py-4 px-8 rounded-xl"
    >
      <!-- repo -->
      <section class="text-center md:text-left space-y-2">
        <p class="text-blue-900 dark:text-white text-xs md:text-sm">
          Repos
        </p>
        <p
          class="repos__num dark:text-white text-darKModeBackground text-lg md:text-xl font-bold"
        >
          ${datas.public_repos ? datas.public_repos : "0"}
        </p>
      </section>

      <!-- followers -->
      <section class="text-center md:text-left space-y-2">
        <p class="text-blue-900 dark:text-white text-xs md:text-sm">
          Followers
        </p>
        <p
          class="repos__num dark:text-white text-darKModeBackground text-lg md:text-xl font-bold"
        >
          ${datas.followers ? datas.followers : "0"}
        </p>
      </section>

      <!-- following -->
      <section class="text-center md:text-left space-y-2">
        <p class="text-blue-900 dark:text-white text-xs md:text-sm">
          Following
        </p>
        <p
          class="repos__num dark:text-white text-darKModeBackground text-lg md:text-xl font-bold"
        >
          ${datas.following ? datas.following : "0"}
        </p>
      </section>
    </div>

    <!-- ========== location link socials ========-->
    <div
      class="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 md:gap-x-14"
    >
      <!-- location -->
      <section class="flex gap-6 items-center">
        <div>
          <img src=" ${
            htmlClass.classList.contains("dark") && datas.location
              ? "./assets/icon-location-dark.svg"
              : "./assets/icon-location.svg"
          }" alt="" />
        </div>
        <p
          class="text-sm ${
            datas.location
              ? "text-lightModeTextColor"
              : "text-lightNotAvailableColor"
          } ${
    datas.location ? "dark:text-white" : "text-lightNotAvailableColor"
  } md:text-base"
        >
          ${datas.location || "Not Available"}
        </p>
      </section>

      <!-- link -->
      <section class="flex gap-6 items-center">
        <div><img src="${
          htmlClass.classList.contains("dark") && datas.url
            ? "./assets/icon-website-dark.svg"
            : "./assets/icon-website.svg"
        }" alt="" /></div>
        <p class="text-lightModeTextColor">
          <a
            href="${datas.url || ""}"
            class="${
              datas.url
                ? "text-lightModeTextColor"
                : "text-lightNotAvailableColor"
            } ${
    datas.url ? "dark:text-white" : "text-lightNotAvailableColor"
  } text-sm md:text-base"
            >${datas.url || "Not Available"}</a
          >
        </p>
      </section>

      <!-- social(twitter) -->
      <section class="flex gap-6 items-center">
        <div><img src="${
          htmlClass.classList.contains("dark") && datas.twitter_username
            ? "./assets/icon-twitter-dark.svg"
            : "./assets/icon-twitter.svg"
        }" alt="" /></div>
        <p>
          <a
            href="${
              datas.twitter_username
                ? `https://twitter.com/${datas.twitter_username}`
                : ""
            }"
            class="${
              datas.twitter_username
                ? "text-lightModeTextColor"
                : "text-lightNotAvailableColor"
            } ${
    datas.twitter_username ? "dark:text-white" : "text-lightNotAvailableColor"
  } text-sm md:text-base truncate"
            >${datas.twitter_username || "Not Available"}</a
          >
        </p>
      </section>

      <!-- company -->
      <section class="flex gap-6 items-center">
        <div>
          <img src="${
            htmlClass.classList.contains("dark") && datas.company
              ? "./assets/icon-company-dark.svg"
              : "./assets/icon-company.svg"
          }" alt="" class="" />
        </div>
        <p
          class="${
            datas.company
              ? "text-lightModeTextColor"
              : "text-lightNotAvailableColor"
          } ${
    datas.company ? "dark:text-white" : "text-lightNotAvailableColor"
  } text-sm md:text-base truncate"
        >
          @${datas.company || "Not Availble"}
        </p>
      </section>
    </div>
  </div>
</div>
  `;

  mainGitSearch.insertAdjacentHTML("afterbegin", html);
};

// error message display
const errorDisplay = function (msg) {
  const error = `
    <h1 class="text-xl text-red-600 italic font-bold mt-20">
    ${msg}
  </h1>
    `;
  errorMessageSection.insertAdjacentHTML("afterbegin", error);
};

// fetching data from api
export const getGitProfle = async function (username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    console.log(res);
    if (!res.ok) throw new Error("Something went wrong fetching data :(");

    const data = await res.json();
    displayGitProfile(data);

    // if no error hide the error-message section
    errorMessageSection.innerHTML = "";
    errorMessageSection.classList.add("hidden");
  } catch (err) {
    console.log(err);
    errorMessageSection.classList.remove("hidden");
    errorDisplay(err);
  }
};
